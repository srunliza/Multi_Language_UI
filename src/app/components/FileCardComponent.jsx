import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

const FileCardComponent = () => {
  return (
    <div class="bg-white rounded-lg p-4 shadow-md w-[200px] h-[96px] ">
      <div className="w-[44px] h-[40px] shadow-md rounded-lg grid justify-center items-center mb-8">
        <div className='container'>
          <InsertDriveFileOutlinedIcon color="warning"/>
        </div>
           
      </div>
    </div>
  );
};

export default FileCardComponent;
