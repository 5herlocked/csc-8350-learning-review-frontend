import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import {useState} from "react";
import {Amplify} from "aws-amplify";
import awsconfig from './aws-exports';
import * as queries from './graphql/queries';
import {API, graphqlOperation} from 'aws-amplify';

Amplify.configure(awsconfig);

function App() {
  // const [uploadUrl, setUploadUrl] = useState('');
  // const [fileSelectionError, setFileSelectionError] = useState("");
  // const [selectedFile, setSelectedFile] = useState(undefined);
  // const [isFilePicked, setIsFilePicked] = useState(false);
  //
  // async function onFileChanged(event) {
  //   console.log(event.target.files[0]);
  //   const fileObj = event.target.files && event.target.files[0];
  //
  //   if (!fileObj) return;
  //
  //   const [type] = fileObj.type.split('/');
  //
  //   console.log(type)
  //
  //   if (!type || type !== 'image') {
  //     setFileSelectionError("You can only upload image files");
  //     return;
  //   }
  //
  //   let uploadUrl = await API.graphql(graphqlOperation(queries.getPresignedUrl,
  //       {
  //         bucket_name: 's3-lambda-rekognition-source-bucket',
  //         object_key: fileObj.name,
  //         file_type: type,
  //       }
  //   ));
  //
  //   // console.log((uploadUrl.data)["getPresignedUrl"]);
  //
  //   uploadUrl = JSON.parse((uploadUrl.data)["getPresignedUrl"]).presignedUrl;
  //   console.log(uploadUrl);
  //
  //   setUploadUrl(uploadUrl);
  //   setSelectedFile(event);
  //   setIsFilePicked(true);
  //   setFileSelectionError("");
  // }
  //
  // async function handleSubmission() {
  //   const fileEvent = selectedFile.target.files && selectedFile.target.files[0];
  //
  // const formData = new FormData();
  // formData.append('Content-Type', 'image');
  //
  // formData.append('file', fileEvent); // The file has to be the last element
  //
  // const response = await Axios.put(uploadUrl, formData, {
  //   headers: {'Content-Type': 'multipart/form-data'},
  // });
  //
  //   console.log(fileEvent);
  //
  //   const response = await Axios.put(
  //       uploadUrl,
  //       fileEvent,
  //       {
  //         baseURL: ''
  //       }
  //   );
  //
  //   setIsFilePicked(false);
  //   setSelectedFile(undefined);
  //   setUploadUrl("");
  // }
  /*
  *
          <label>Select a file to upload</label>
          <input type="file" onChange={onFileChanged}/>
          {isFilePicked ? (
              <div>
                <p>Filename: {selectedFile["name"]}</p>
              </div>
          ) : (
              <p>{fileSelectionError}</p>
          )
          }
          {isFilePicked && <button onClick={handleSubmission}>Submit</button>}
  * */

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}

export default App;
