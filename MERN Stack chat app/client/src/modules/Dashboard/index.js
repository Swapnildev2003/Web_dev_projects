import React from "react"
import Avatar from "../../assets/vecteezy_man-avatar-vector-icon_6487917.jpg"
import Input from "../../components/input/index"
const Dashboard = () => {
    const contacts = [
        {
            name: 'John Doe',
            status: 'Available',
            avatar: Avatar,

        },
        {
            name: 'Jane Smith',
            status: 'Busy',
            avatar: Avatar,
        },
        {
            name: 'Tom Williams',
            status: 'Away',
            avatar: Avatar,
        },
        {
            name: 'Harry Johnson',
            status: 'Offline',
            avatar: Avatar,
        },
        {
            name: 'Harry Johnson',
            status: 'Offline',
            avatar: Avatar,
        },
        {
            name: 'Harry Johnson',
            status: 'Offline',
            avatar: Avatar,
        },


    ]
    return (
        <div className="w-screen flex">
            <div className="w-[25%]  h-screen bg-secondary">
                <div className="flex items-center mx-14 my-8">
                    <div className="border border-primary p-[2px] rounded-lg"> <img src={Avatar} className="rounded-lg" alt="" width={50} height={50} /></div>
                    <div className="ml-8 ">
                        <h3 className="text-xl">Swapnil Dev</h3>
                        <p className="text-lg font-light">Software Developer</p>
                    </div>
                </div>
                <hr />
                <div className="mx-14 mt-10">
                    <div className="text-primary text-lg ">Messages</div>
                    <div>
                        {
                            contacts.map(({ name, status, avatar }, index) => {
                                return (
                                    <div Key={index} className="flex  items-center py-5 border-b border-b-gray-300">
                                        <div className="cursor-pointer flex items-center">
                                            <div>
                                                <img src={avatar} className="rounded-lg" alt="" width={45} height={45} />
                                            </div>
                                            <div className="ml-5 ">
                                                <h3 className="text-base font-semibold">{name}</h3>
                                                <p className="text-sm font-light text-gray-600">{status}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="w-[50%]  h-screen bg-white flex flex-col items-center">
                <div className="w-[75%] bg-secondary h-[80px] my-14 rounded-full flex items-center px-14 ">
                    <div className="cursor-pointer">
                        <img src={Avatar} className="rounded-lg" alt="" width={45} height={45} />
                    </div>
                    <div className="ml-6 mr-auto">
                        <h3 className="text-lg ">Alexander</h3>
                        <p className="text-sm font-light text-gray-600">online</p>
                    </div>
                    <div className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-outgoing" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        <path d="M15 9l5 -5" />
                        <path d="M16 4l4 0l0 4" />
                    </svg></div>
                </div>
                <div className="h-[75%] w-full overflow-x-auto shadow-sm">
                    <div className="p-14 ">
                        <div className="max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">
                            Hello how are you my dear
                        </div>
                        <div className="max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl p-4 mb-6 text-white ml-auto">
                            Hello how are you my dear
                        </div>
                        <div className="max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">
                            Hello how are you my dear
                        </div>
                        <div className="max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl p-4 mb-6 text-white ml-auto">
                            Hello how are you my dear
                        </div>
                        <div className="max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">
                            Hello how are you my dear
                        </div>
                        <div className="max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl p-4 mb-6 text-white ml-auto">
                            Hello how are you my dear
                        </div>
                    </div>
                </div>
                <div className="p-14 w-full flex items-center ">
                    <Input placeholder="Type a message" className="w-full px-4 shadow-md rounded-full border-0 bg-light focus:ring-0 outline-none" />
                    <div className=" p-2 cursor-pointer bg-light rounded-full mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-telegram" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                        </svg>
                    </div>
                    <div className=" p-2 cursor-pointer bg-light rounded-full ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                            <path d="M9 12h6" />
                            <path d="M12 9v6" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="w-[25%]  h-screen bg-light"></div>
        </div>
    )
}

export default Dashboard;