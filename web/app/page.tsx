import Image from "next/image";

import {Button} from "@/components/ui/button"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1>Todist</h1>
     <Button variant = {""}>Hello </Button>


    {/* <form action ={signInAction}>
        <Button> Log in </Button>  
    </form> */}
    </main>
  );
}
