const DashboardLayout = ({children}) => {
    return (
        <>
            <div className="grid grid-cols-12">
                <div className="col-span-2">
                    <div className="bg-red-400 p-4 min-h-screen">

                    </div>
                </div>
                <div className="col-span-10">
                    <div className="bg-blue-400 p-8 shadow-md">

                    </div>


                    <main>{children}</main>
                </div>
            </div>
        </>
       
     );
}
 
export default DashboardLayout;