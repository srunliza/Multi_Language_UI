import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from 'next/image';


const FeedbackComponent = () => {

    const feedbackData = [
        {
            'id': 1,
            'name': "Kroem Vandy",
            'position': "Developer",
            'comment': "Dear translator, you have some mistake in your translation please edit it as soon as possible",
            'date': "24 May 2024"
        },
        {
            'id': 2,
            'name': "Srun Liza",
            'position': "Developer",
            'comment': "Dear translator, you have some mistake in your translation please edit it as soon as possible",
            'date': "24 May 2024"
        },
        {
            'id': 3,
            'name': "Tep Thean",
            'position': "Developer",
            'comment': "Dear translator, you have some mistake in your translation please edit it as soon as possible",
            'date': "24 May 2024"
        },
        {
            'id': 4,
            'name': "Ret Sokhim",
            'position': "Developer",
            'comment': "Dear translator, you have some mistake in your translation please edit it as soon as possible",
            'date': "24 May 2024"
        },
        {
            'id': 5,
            'name': "Tan Vibolpheakneath",
            'position': "Developer",
            'comment': "Dear translator, you have some mistake in your translation please edit it as soon as possible",
            'date': "24 May 2024"
        }
    ]



    return (
        <main>
            <div className="bg-white py-3 px-5 shadow-md rounded-xl min-h-[100px]">
                <h1 className="text-gray-800 text-xl font-semibold mb-5">Feedback</h1>
                <div className='overflow-auto max-h-[420px] mb-4 no-scrollbar'>
                    {/* feedback */}
                    {feedbackData.map((feedback, index) => (
                        <div key={index} className="bg-white shadow px-2 rounded-xl mb-2.5">
                            <div className="flex py-2 pb-2">
                                <div className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center">
                                    <img className="h-12 w-12 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/43.jpg" alt="" />
                                </div>
                                <div className="ml-3 text-p">
                                    <span className='text-gray-800 flex justify-end ml-[237px]'><MoreVertIcon /></span>
                                    <div className="font-medium text-gray-800 mt-[-20px]">{feedback.name}</div>
                                    <div className="text-gray-600 text-xs mt-1">{feedback.position}</div>
                                    <div className="mt-3 text-gray-700 text-[13px] ml-[-63px]">{feedback.comment}</div>
                                    <div className='text-gray-500 text-sm mt-2 ml-[-63px]'>{feedback.date}</div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </main>
    );
}

export default FeedbackComponent;