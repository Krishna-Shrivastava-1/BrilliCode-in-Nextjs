
import CodeEditor from '@/components/CodeEditor';
import Compiler from '@/components/Compiler';
import ShowSpooner from '@/components/ShowSpooner';
import React from 'react'


export async function generateMetadata({ params }) {
  const { id } =await params;
  return {
    title: `BrilliCode - ${id.charAt(0).toUpperCase() + id.slice(1)} Online Compiler`,
    description:
      'BrilliCode is a powerful online compiler supporting multiple programming languages. Write, compile, and debug your code seamlessly with instant output and a user-friendly interface. Perfect for developers of all levels!',
  };
}
const page = ({ params }) => {
  const { id } = React.use(params);


  return (
    <div>

      <div>
        {
          id === 'html-css-js-webpack' ?
          <Compiler />
           
           :
           <CodeEditor selectedlangi={id} />
        }
       
      </div>
      <ShowSpooner />
    </div>
  )
}

export default page


