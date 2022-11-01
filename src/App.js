import './App.css';
import axios from 'axios';
import {useState} from "react";
import {Amplify} from "aws-amplify";
import awsconfig from './aws-exports';
import * as queries from './graphql/queries.ts';
import { API, graphqlOperation } from 'aws-amplify';

Amplify.configure(awsconfig);
function App() {
  const [uploadUrl, setUploadUrl] = useState("");
  const [fileSelectionError, setFileSelectionError] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  async function onFileChanged(event) {
    console.log(event.target.files[0]);
    const fileObj = event.target.files && event.target.files[0];

    console.log(fileObj);
    if (!fileObj) return;

    const [type] = fileObj.type.split('/');

    if (!type || type !== 'image') {
      setFileSelectionError("You can only upload image files");
      return;
    }
    
    const uploadUrl = await API.graphql(graphqlOperation(queries.getPresignedUrl,
        {
          bucket_name: 's3-lambda-rekognition-source-bucket',
          object_key: fileObj.name,
        }
    ));
    console.log(uploadUrl.data.getPresignedUrl);

    setUploadUrl(uploadUrl.data.getPresignedUrl);
    setSelectedFile(event);
    setIsFilePicked(true);
    setFileSelectionError("");
  }

  async function handleSubmission() {
    const fileEvent = selectedFile.target.files && selectedFile.target.files[0];

    const formData = new FormData();

    formData.append('Content-Type', fileEvent.type.split('/'));

    formData.append('file', fileEvent);

    const response = await fetch(
        (uploadUrl + "/"),
        {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          body: formData
        }
    );

    console.log(response);

    // const response = await axios.postForm((uploadUrl + '/'), formData, {
    //   headers: {'Content-Type': 'multipart/form-data'},
    // });

    setIsFilePicked(false);
    setSelectedFile(undefined);
    setUploadUrl("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <label>Select a file to upload</label>
        <input type="file" onChange={onFileChanged}/>
        {isFilePicked ? (
          <div>
            <p>Filename: {selectedFile.name}</p>
          </div>
        ) : (
          <p>{ fileSelectionError }</p>
        )
        }
        { isFilePicked && <button  onClick={handleSubmission}>Submit</button>}
      </header>
    </div>
  );
}

export default App;
