import React from 'react'
import { Colors } from '../utils/Color'
import { Images } from '../utils/Images'

const UniqueBackground = () => {
    return (
        <div className='h-[579px] mt-32' style={{ backgroundColor: Colors.UniqueBack }}>
            <div className='w-[70%] h-full my-3 mx-auto' style={{
                backgroundImage: `url(${Images.UniqueImg})`, backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }} />
        </div>
    )
}

export default UniqueBackground