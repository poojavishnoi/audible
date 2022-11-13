import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=' border-2 border-gray-400  bg-[#f2cda6] rounded-lg text-[#002b6f] my-4 mx-20'>
        <div className='flex justify-center py-8 flex-col items-center'>
            
            <div className='py-16 my-2 text-black text-center rounded-md'>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Upload file</label>
<input class="block w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 p-2 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"></input>
              <h2>Supported files:</h2>
              <h3 className='text-gray-500'>txt</h3>
            </div>
        </div>
      </div>
    </div>
  )
}
