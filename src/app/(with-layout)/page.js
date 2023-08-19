import img1 from "@/assest/iamge1.jpg"

import Image from 'next/image'

const  Home = () => {
  return (
    <main>
     <h1>Home</h1>

   {/* <Image src={img1} alt="" /> */}
   <Image width={600} height={350} src="https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" ></Image>

    </main>
  )
}
export default Home;