import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import { yellow } from '@mui/material/colors';

const CardComponent = () => {
  return (
    <div class="bg-white rounded-lg p-4 shadow-md flex items-center justify-between w-[370px] h-[163px]">
      <div class="flex flex-col gap-10">
        <span class="font-semibold text-xl">Pending Project</span>
        <span class="text-3xl font-bold">40,689</span>
      </div>
      <div className="w-[72px] h-[66px] shadow-md rounded-lg grid justify-center items-center mb-8">
        <PendingActionsOutlinedIcon color="warning" fontSize="large"/>
      </div>
    </div>
  );
};

export default CardComponent;
