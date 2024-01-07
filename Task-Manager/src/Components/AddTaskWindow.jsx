import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import axios from 'axios'

function AddTaskWindow({ modal, handleModal }) {

    const {onOpen, onOpenChange} = useDisclosure();
    const [task, setTask] = React.useState('');

    const addTask =()=>{
        axios.post(`https://659ad7e9652b843dea541035.mockapi.io/tasks`, {
            task: task,
            status: 'waiting',
        }).then(res=>{
            console.log('added c:');
            handleModal()
            setTask('')
        })
    }

  return (
    <>
      <Modal isOpen={modal} onOpenChange={onOpenChange} onClose={handleModal} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Add Task</ModalHeader>
              <ModalBody>
                <div>
                    <Input 
                        isRequired 
                        type="text"
                        value={task}
                        onChange={(event)=>{setTask(event.target.value)}}
                        label="Task Name" />
                </div>
                
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onClick={addTask}>
                  Add Task
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddTaskWindow