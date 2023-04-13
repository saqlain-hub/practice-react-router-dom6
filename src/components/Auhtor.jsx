import React from 'react'
import profilePic from '../assets/profile-pic.jpg'

function Author() {
  return (

    <div className="w-full h-full flex flex-col items-center py-8 bg-gray-300">
        <div className="w-[600px]">
            <img src={profilePic} alt="" />
            <p className="text-justify text-[1.2em]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nostrum voluptatem numquam pariatur molestiae necessitatibus fugit suscipit, quae cumque omnis eaque ab delectus consequatur quidem! Recusandae quidem temporibus qui eos repellat soluta facilis vel quam quaerat dolorem pariatur ullam consequatur est adipisci corrupti, suscipit aliquam. Nulla porro perspiciatis nobis! Reiciendis similique iusto eos quia, quod ab laboriosam optio explicabo laborum officiis nam recusandae voluptatem aspernatur illo neque dignissimos praesentium maiores provident! Amet, expedita laborum reprehenderit ab, dicta assumenda laboriosam earum nemo magnam numquam cupiditate? Numquam dolores sit dolore optio fugit!</p>
        </div>
    </div>
  )
}

export default Author