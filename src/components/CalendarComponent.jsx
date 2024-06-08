import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const CalendarComponent = () => {
    return (
        <main className="flex items-center justify-center ">
            <div className="w-full container  p-4 bg-white rounded-lg pr-8 pl-8">
                <div className="flex items-center justify-between mb-4 text-black">
                    <h1 className="text-2xl font-semibold">May 2024</h1>
                    <div>
                        <button className="px-4 py-2 font-bold rounded-l hover:bg-[#f1f4f9]"> <ChevronLeftIcon/> </button>
                        <button className="px-4 py-2 font-bold rounded-r hover:bg-gray-200"> <ChevronRightIcon/> </button>
                    </div>
                </div>
                <div className="grid grid-cols-7 text-gray-800 bg-[#f1f4f9] rounded-lg">
                    {/* <!-- Weekday Headers --> */}
                    <div className="text-center text-sm py-2 font-semibold">MON</div>
                    <div className="text-center text-sm py-2 font-semibold">TUE</div>
                    <div className="text-center text-sm py-2 font-semibold">WED</div>
                    <div className="text-center text-sm py-2 font-semibold">THU</div>
                    <div className="text-center text-sm py-2 font-semibold">FRI</div>
                    <div className="text-center text-sm py-2 font-semibold">SAT</div>
                    <div className="text-center text-sm py-2 font-semibold">SUN</div>
                    
                    {/* <!-- Blank cells for previous month --> */}
                  
                    <div className="p-5 text-right pt-2 pb-12 bg-opacity-25 bg-custom-pattern bg-custom-size border">25</div>
                    <div className="p-8 text-right pt-2 pb-12 bg-opacity-25 bg-custom-pattern bg-custom-size bg-gray-100 border">26</div>
                    <div className="p-8 text-right pt-2 pb-12 bg-opacity-25 bg-custom-pattern bg-custom-size bg-gray-100 border">27</div>
                    <div className="p-8 text-right pt-2 pb-12 bg-opacity-25 bg-custom-pattern bg-custom-size bg-gray-100 border">28</div>
                    <div className="p-8 text-right pt-2 pb-12 bg-opacity-25 bg-custom-pattern bg-custom-size bg-gray-100 border">29</div>
                    <div className="p-8 text-right pt-2 pb-12 bg-opacity-25 bg-custom-pattern bg-custom-size bg-gray-100 border">30</div>
                    <div className="p-8 text-right pt-2 pb-12 pr-4 bg-white border">1</div>
            
                    
                    {/* <!-- Calendar Days --> */}
                    <div className="p-8 text-right pt-2 pb-12 pr-4 bg-white border">2</div>
                    <div className="p-8 text-right pt-2 pb-12 pr-4 bg-white border relative">
                        3
                        <div className="absolute bottom-0 left-0 right-0 bg-blue-100 border-l-4 border-blue-500 text-blue-600 text-xs p-1">Start Date</div>
                    </div>
                    <div className="p-8 text-right pt-2 pb-12 pr-5 bg-white border">4</div>
                    <div className="p-8 text-right pt-2 pb-12 pr-5 bg-white border">5</div>
                    <div className="p-8 text-right pt-2 pb-12 pr-5 bg-white border">6</div>
                    <div className="p-8 text-right pt-2 pb-12 pr-5 bg-white border">7</div>
                    <div className="p-8 text-right pt-2 pb-12 pr-5 bg-white border">8</div>
                    
                    <div className="p-8 text-right pt-2 pb-12 pr-5 bg-white border">9</div>
                    <div className="p-8 text-right pt-2 pb-12 pr-5 bg-white border">10</div>
                    <div className="p-8 text-right pt-2 pb-12 pr-5 bg-white border">11</div>
                    <div className="p-8 text-right pt-2 pb-12 pr-5 bg-white border">12</div>
                    <div className="p-8 text-right pt-2 pb-12 pr-5 bg-white border">13</div>
                    <div className="p-8 text-right pt-2 pb-12 pr-5 bg-white border">14</div>
                    <div className="p-8 text-right pt-2 pb-12 pr-5 bg-white border">15</div>
                    
                    <div className="p-8 text-right pt-2 pb-12 pr-5 bg-white border relative">
                        16
                        <div className="absolute bottom-0 left-0 right-0 bg-pink-100 text-pink-600 border-l-4 border-pink-500 text-xs p-1">End Date</div>
                    </div>
                    <div className="p-8 text-right pt-2 pb-12 pr-5 bg-white border">17</div>
                    <div className="p-8 text-right pt-2 pb-12 pr-5 bg-white border">18</div>
                    <div className="p-8 text-right pt-2 pb-12 pr-5 bg-white border">19</div>
                    <div className="p-8 text-right pt-2 pb-12 pr-5 bg-white border">20</div>
                    <div className="p-8 text-right pt-2 pb-12 pr-5 bg-white border">21</div>
                    <div className="p-8 text-right pt-2 pb-12 pr-5 bg-white border">22</div>
                
                    <div className="p-8 text-right pt-2 pb-12 pr-5 bg-white border">23</div>
                    <div className="p-8 text-right pt-2 pb-12 pr-5 bg-white border">24</div>
                    <div className="p-8 text-right pt-2 pb-12 pr-5 bg-white border relative">
                        25
                        <div className="absolute bottom-0 left-0 right-0 bg-blue-100 border-l-4 border-blue-500 text-blue-600 text-xs p-1">Start Date</div>
                    </div>
                    <div className="p-8 text-right pt-2 pb-12 pr-5 bg-white border">26</div>
                    <div className="p-8 text-right pt-2 pb-12 pr-5 bg-white border relative">
                        27
                        <div className="absolute bottom-0 left-0 right-0 bg-orange-100 text-orange-600 border-l-4 border-red-500 text-xs p-1">End Date</div>
                    </div>
                    <div className="p-8 text-right pt-2 pb-12 pr-5 bg-white border">28</div>
                    <div className="p-8 text-right pt-2 pb-12 pr-5 bg-white border">29</div>
                    
                    {/* <!-- Blank cells for next month --> */}
                    <div className="p-8 text-right pt-2 pb-12 pr-5 bg-opacity-25 bg-custom-pattern bg-custom-size bg-gray-100 border">30</div>
                    <div className="p-8 text-right pt-2 pb-12 pr-5 bg-opacity-25 bg-custom-pattern bg-custom-size bg-gray-100 border">31</div>
                    <div className="p-8 text-right pt-2 pb-12 pr-5 bg-opacity-25 bg-custom-pattern bg-custom-size bg-gray-100 border">1</div>
                    <div className="p-8 text-right pt-2 pb-12 pr-5 bg-opacity-25 bg-custom-pattern bg-custom-size bg-gray-100 border">2</div>
                    <div className="p-8 text-right pt-2 pb-12 pr-5 bg-opacity-25 bg-custom-pattern bg-custom-size bg-gray-100 border">3</div>
                    <div className="p-8 text-right pt-2 pb-12 pr-5 bg-opacity-25 bg-custom-pattern bg-custom-size bg-gray-100 border">4</div>
                    <div className="p-8 text-right pt-2 pb-12 pr-5 bg-opacity-25 bg-custom-pattern bg-custom-size bg-gray-100 border">5</div>
                </div>
            </div>
        </main>
    )
}

export default CalendarComponent;