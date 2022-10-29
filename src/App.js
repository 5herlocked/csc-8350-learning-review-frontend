import './App.css';
import {useState} from "react";
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import {getPresignedUrl} from "./graphql/queries";

Amplify.configure(awsconfig);
function App() {
  const [uploadUrl, setUploadUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  async function onFileChanged(event) {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
    const uploadUrl = await API.graphql(graphqlOperation(getPresignedUrl,
      {
        input: {
          bucket_name: '',
          object_key: ''
      }}
    ));
    console.log(uploadUrl.data.getPresignedUrl);
    setUploadUrl(uploadUrl.data.getPresignedUrl);
    setIsFilePicked(true);
  }

  const handleSubmission = () => {

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
          <p>Select a file to see the details</p>
        )
        }
        <button onClick={handleSubmission}>Submit</button>
      </header>
    </div>
  );
}

export default App;
