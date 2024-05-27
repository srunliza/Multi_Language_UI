const EmployeeCalendarComponent = () => {
    return ( 
        <main>
            <div className="bg-white w-[350px] shadow-xl overflow-hidden rounded-2xl mx-auto text-gray-900 font-semibold text-center">
                <div className="flex items-center justify-around px-4 py-6">
                    <div className="text-sm">May, 2024</div>

                    <button className="p-2 rounded-md bg-indigo-200 text-indigo-600">
                        <svg className="w-4 h-4 stroke-current" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"></path></svg>
                    </button>

                    <button className="p-2 rounded-md bg-indigo-200 text-indigo-600">
                        <svg className="w-4 h-4 stroke-current" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>

                <div className="grid grid-cols-7 grid-col-dense grid-rows-6 p-4 gap-1">
                    <div className="text-gray-700 text-sm">Mon</div>
                    <div className="text-gray-700 text-sm">Tue</div>
                    <div className="text-gray-700 text-sm">Wed</div>
                    <div className="text-gray-700 text-sm">Thu</div>
                    <div className="text-gray-700 text-sm">Fri</div>
                    <div className="text-gray-700 text-sm">Sat</div>
                    <div className="text-gray-700 text-sm">Sun</div>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2 text-gray-500">27</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2 text-gray-500">28</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2 text-gray-500">29</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2 text-gray-500">30</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2">1</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2">2</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2">3</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2">4</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2">5</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2">6</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2">7</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2">8</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2">9</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2">10</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2">11</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2">12</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2">13</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2">14</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2">15</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2">16</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2">17</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2">18</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2">19</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2">20</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2">21</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2">22</a>
                    <a href="#" className="hover:bg-indigo-600 text-xs rounded-lg p-2 bg-indigo-500 text-white">23</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2">24</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2">25</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2">26</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2">27</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2">28</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2">29</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2">30</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2">31</a>
                    {/* <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2 text-gray-500">1</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2 text-gray-500">2</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2 text-gray-500">3</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2 text-gray-500">4</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2 text-gray-500">5</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2 text-gray-500">6</a>
                    <a href="#" className="hover:bg-indigo-100 text-xs rounded-md p-2 text-gray-500">7</a> */}
                </div>
            </div>
        </main>
     );
}
 
export default EmployeeCalendarComponent;