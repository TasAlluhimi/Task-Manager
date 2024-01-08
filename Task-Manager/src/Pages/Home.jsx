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
            <div className='text-lg lg:text-xl font-bold
            2xl:mt-5 2xl:text-6xl'>Project Overview</div>
             <div className='p-5'>
                     <div className='bg-white text-base 2xl:text-3xl'>Projects/ 
                     <Button className='bg-white font-bold 2xl:text-3xl'>SAFF Website</Button></div>
{/* main dev */}
<div className=' flex flex-col 2xl:flex-row'>

<div className='flex justify-center items-center flex-wrap lg:gap-8 md:gap-10 max-sm:gap-10 lg:h-[70vh] 2xl:gap-9 2xl:w-[60%]'>

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

<div>
    <div className='2xl:hidden font-bold 2xl:text-6xl text-xl'>Project Timeline</div>
<div class="timeline">
  <div class="timeContainer right">
    <div class="content shadow-xl">
      <div className='font-bold text-lg'>2006</div>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
    </div>
  </div>
  <div class="timeContainer left">
    <div class="content shadow-xl">
      <div className='font-bold text-lg'>2015</div>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
    </div>
  </div>
  <div class="timeContainer right">
    <div class="content shadow-xl">
      <div className='font-bold text-lg'>2021</div>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
    </div>
  </div>
  <div class="timeContainer left">
    <div class="content shadow-xl">
      <div className='font-bold text-lg'>2023</div>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
    </div>
  </div>
  <div class="timeContainer right">
    <div class="content shadow-xl">
      <div className='font-bold text-lg'>2034</div>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
    </div>
  </div>
</div>

</div>
</div>
        </div>
           </div>
            <div className='p-5'>
         <div className='mb-6 text-lg lg:text-xl flex justify-between items-center'>
                 <div className='font-bold 2xl:text-6xl'>
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
                        className='bg-slate-200 rounded-lg p-5 min-h-14 w-48 lg:w-72 2xl:w-96'
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, 'waiting')}>
                        <div className='font-bold 2xl:text-2xl mb-4'>To Do</div>

                        <div>
                            {data.map((item) => (
                                <Chip
                                    variant="flat"
                                    color="warning"
                                    key={item.id}
                                    className='mt-2 p-1 rounded-lg block 2xl:text-xl'
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, item.id)}>
                                    {item.task}
                                </Chip>
                            ))}
                        </div>
                    </div>

                    <div
                        className='bg-slate-200 rounded-lg p-5 min-h-14 w-48 lg:w-72 2xl:w-96'
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, 'inProgress')}>
                        <div className='font-bold 2xl:text-2xl mb-4'>In Progress</div>
                        {inProgress.map((item) => (
                            <Chip
                                variant="flat"
                                color="secondary"
                                key={item.id}
                                className='mt-2 p-1 rounded-lg block 2xl:text-xl'
                                draggable
                                onDragStart={(e) => handleDragStart(e, item.id)}>
                                {item.task}
                            </Chip>
                        ))}
                    </div>

                    <div
                        className='bg-slate-200 rounded-lg p-5 min-h-14 w-48 lg:w-72 2xl:w-96'
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, 'done')}>
                        <div className='font-bold 2xl:text-2xl mb-4'>Done</div>
                        {done.map((item) => (
                            <Chip
                                variant="flat"
                                color="success"
                                key={item.id}
                                className='mt-2 p-1 rounded-lg block 2xl:text-xl'
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
