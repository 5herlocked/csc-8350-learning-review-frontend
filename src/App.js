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
        input: {
          bucket_name: 's3-lambda-rekognition-source-bucket',
          object_key: fileObj.name,
        }
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

    const _ = new FormData();

    _.append('Content-Type', fileEvent.type.split('/'));

    _.append('file', fileEvent);

    const response = await axios.post(uploadUrl, _, {
      headers: {'Content-Type': 'multipart/form-data'},
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <label>Select a file to upload</label>
        <input type="file" onChange={onFileChanged}/>
        {isFilePicked ? (
          <div>
            <p>Filename: {selectedFile.name}</p>
            <p>Filetype: {selectedFile.type}</p>
            <p>Size in bytes: {selectedFile.size}</p>
            <p>
              lastModifiedDate:{' '}
              {selectedFile.lastModifiedDate.toLocaleDateString()}
            </p>
          </div>
        ) : (
          <p>{ fileSelectionError }</p>
        )
        }
        <button onClick={handleSubmission}>Submit</button>
      </header>
    </div>
  );
}

export default App;
