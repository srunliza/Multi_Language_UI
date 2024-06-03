import React from 'react'

export const ListMember = () => {
          const users = [
                    {
                      name: "Robert Downey Jr.",
                      image: "https://i.imgur.com/Q6739lH.jpg",
                      lastSeen: "a long time ago",
                    },
                    {
                              name: "Robert Downey Jr.",
                              image: "https://i.imgur.com/Q6739lH.jpg",
                              lastSeen: "a long time ago",
                    },
                    {
                              name: "Robert Downey Jr.",
                              image: "https://i.imgur.com/Q6739lH.jpg",
                              lastSeen: "a long time ago",
                     },
                     {
                               name: "Robert Downey Jr.",
                               image: "https://i.imgur.com/Q6739lH.jpg",
                               lastSeen: "a long time ago",
                     },
                     {
                               name: "Robert Downey Jr.",
                               image: "https://i.imgur.com/Q6739lH.jpg",
                               lastSeen: "a long time ago",
                      },
                      {
                        name: "Robert Downey Jr.",
                        image: "https://i.imgur.com/Q6739lH.jpg",
                        lastSeen: "a long time ago",
              },
              {
                        name: "Robert Downey Jr.",
                        image: "https://i.imgur.com/Q6739lH.jpg",
                        lastSeen: "a long time ago",
               }
                    
                  ];
  return (
    <div>
           <div className="mt-1 p-3  overflow-y-auto h-64 no-scrollbar ">
      {users.map((user) => (
             <div className="flex items-center space-x-2 py-1 ">
             <input id="indigoCheckBox" type="checkbox" className='rounded-full'  />
             <img src={user.image} alt={user.name} className="w-10 h-10 rounded-full" />
             <div>
            
               <p className="text-sm font-medium">{user.name}</p>
               <p className="text-xs text-gray-500">{user.lastSeen}</p>
             </div>
           </div>
           
           
      ))}
    </div>
        
    </div>
  )
}
