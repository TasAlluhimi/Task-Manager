import React, { useState, useEffect } from 'react';
import Nav from '../Components/Nav';
import AddTaskWindow from '../Components/AddTaskWindow';
import axios from 'axios';
import { Button } from "@nextui-org/react";
import Footer from '../Components/Footer';
import {Chip} from "@nextui-org/react";
import {CircularProgress} from "@nextui-org/react";
import { Link } from 'react-router-dom';
import doc from '../assets/doc.svg'
import file from '../assets/file.svg'
import tass from '../assets/tasksss.svg'

function Home() {
    const [modal, setModal] = useState(false);
    const [data, setData] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [done, setDone] = useState([]);
    const [count, setCount] = useState(1);
    const [loading, setLoading] = React.useState(true)


    const handleModal = () => {
        setModal(!modal);
    }

    const getData = () => {
        axios.get(`https://659ad7e9652b843dea541035.mockapi.io/tasks`)
            .then(res => {
                const waitingTasks = res.data.filter(item =>
                    item.status === 'waiting'
                );
                const inProgressTasks = res.data.filter(item =>
                    item.status === 'inProgress'
                );
                const doneTasks = res.data.filter(item =>
                    item.status === 'done'
                );
                setData(waitingTasks);
                setInProgress(inProgressTasks);
                setDone(doneTasks);
                setLoading(false)
            });
    }

    const handleDragStart = (e, taskId) => {
        e.dataTransfer.setData('taskId', taskId);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, status) => {
        const taskId = e.dataTransfer.getData('taskId');

        axios.put(`https://659ad7e9652b843dea541035.mockapi.io/tasks/${taskId}`, {
            status,
        });

        getData(); 

    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
        {loading && (
          <div className='w-full h-[100vh] max-sm:h-screen bg-black opacity-35 z-20 absolute top-0 left-0 flex justify-center 
          items-center'>
            <CircularProgress aria-label="Loading..." />
          </div>
    )}

            <div>
                <Nav />
            </div>

            <div className='p-5'>
            <div className='text-lg lg:text-xl font-bold'>Project Overview</div>
             <div className='p-5'>
                     <div className='bg-white text-base'>Projects/ 
                     <Button className='bg-white font-bold'>SAFF Website</Button></div>
                         
<div className='flex justify-center flex-wrap lg:gap-8 md:gap-10 max-sm:gap-10 lg:h-[70vh]'>

<div class="relative flex flex-col justify-center py-6 sm:py-12">
<Link to='/'>
<div
class="group relative cursor-pointer overflow-hidden bg-gradient-to-b from-[#FBB88B] to-[#F9934F] px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm rounded-lg sm:px-10 h-60 w-96 max-sm:w-64">

<span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-b from-[#FBB88B] to-[#F9934F] transition-all duration-300 group-hover:scale-[10]"></span>
<div class="relative z-10 mx-auto max-w-md">
    <span class="grid h-20 w-20 place-items-center rounded-full transition-all duration-300">
        <img 
        src={tass} 
        className='h-12 w-12 transition-all'
        alt="" />
    </span>
    <div
        class="space-y-6 pt-5 text-base leading-7 text-white transition-all duration-300 group-hover:text-white/90 max-sm:text-xs">
        <div><span className='text-2xl'>17</span> Task in progress from Yesterday</div>
    </div>
    <div class="pt-5 text-base font-semibold leading-7">
        
    </div>
</div>
</div>
</Link>
</div>

<div class="relative flex flex-col justify-center py-6 sm:py-12">
<Link to='/'>
<div
class="group relative cursor-pointer overflow-hidden bg-gradient-to-b from-[#9D98EC] to-[#7670DA] px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm rounded-lg sm:px-10 h-60 w-96 max-sm:w-64">

<span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-b from-[#9D98EC] to-[#7670DA] transition-all duration-300 group-hover:scale-[10]"></span>
<div class="relative z-10 mx-auto max-w-md">
    <span class="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-b from-[#9D98EC] to-[#7670DA] transition-all duration-300">
        <img 
        src={doc} 
        className='h-12 w-12 transition-all'
        alt="" />
    </span>
    <div
        class="space-y-6 pt-5 text-base leading-7 text-white transition-all duration-300 group-hover:text-white/90 max-sm:text-xs">
        <div><span className='text-2xl'>10</span> New Assigneds from Yesterday</div>
    </div>
    <div class="pt-5 text-base font-semibold leading-7">
        
    </div>
</div>
</div>
</Link>
</div>

<div class="relative flex flex-col justify-center py-6 sm:py-12 ">
<Link to='/'>
<div
class="group relative cursor-pointer overflow-hidden bg-gradient-to-b from-[#52C9E1] to-[#17ADCB] px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm rounded-xl sm:px-10 h-60 w-96 max-sm:w-64">

<span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-gradient-to-b from-[#52C9E1] to-[#17ADCB] transition-all duration-300 group-hover:scale-[10]"></span>
<div class="relative z-10 mx-auto max-w-md">
    <span class="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-b from-[#52C9E1] to-[#17ADCB] transition-all duration-300">
    <img 
        src={file}
        className='h-12 w-12 transition-all'
        alt="" />
    </span>
    <div
        class="space-y-6 pt-5 text-base leading-7 text-white transition-all duration-300 group-hover:text-white/90 max-sm:text-sm">
        <div><span className='text-2xl'>77%</span> Project Task Completed</div>
    </div>
    
</div>
</div>
</Link>
</div>
</div>
        </div>
           </div>
            <div className='p-5'>
         <div className='mb-6 text-lg lg:text-xl flex justify-between items-center'>
                 <div className='font-bold'>
                 Task Board
                 </div>
                 <Button 
                     onClick={handleModal}
                     className='mt-3'
                     color='primary'
                     size='sm'>Create Task +</Button>
                </div>

                <div className='flex flex-wrap justify-center items-center gap-5 lg:gap-20'>
                    <div
                        className='bg-slate-200 rounded-lg p-5 min-h-14 w-48 lg:w-72'
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, 'waiting')}>
                        <div>To Do</div>

                        <div>
                            {data.map((item) => (
                                <Chip
                                    variant="flat"
                                    color="warning"
                                    key={item.id}
                                    className='mt-2 p-1 rounded-lg block'
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, item.id)}>
                                    {item.task}
                                </Chip>
                            ))}
                        </div>
                    </div>

                    <div
                        className='bg-slate-200 rounded-lg p-5 min-h-14 w-48 lg:w-72'
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, 'inProgress')}>
                        <div>In Progress</div>
                        {inProgress.map((item) => (
                            <Chip
                                variant="flat"
                                color="secondary"
                                key={item.id}
                                className='mt-2 p-1 rounded-lg block'
                                draggable
                                onDragStart={(e) => handleDragStart(e, item.id)}>
                                {item.task}
                            </Chip>
                        ))}
                    </div>

                    <div
                        className='bg-slate-200 rounded-lg p-5 min-h-14 w-48 lg:w-72'
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, 'done')}>
                        <div>Done</div>
                        {done.map((item) => (
                            <Chip
                                variant="flat"
                                color="success"
                                key={item.id}
                                className='mt-2 p-1 rounded-lg block'
                                draggable
                                onDragStart={(e) => handleDragStart(e, item.id)}>
                                {item.task}
                            </Chip>
                        ))}
                    </div>
                </div>
            </div>
            <div className='mb-40'></div>
            <AddTaskWindow modal={modal} handleModal={handleModal} />

            <Footer />
        </>
    )
}

export default Home;
