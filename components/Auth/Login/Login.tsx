import { Card } from "@nextui-org/react"; 
import LoginForm from "./LoginForm";
import Center from "@/components/Global/Ui/Center";
import Title from "@/components/Global/Ui/Title";

export default function Login() {
  return (
    
      <Center>
        <Title exSt="mt-4" title="Login" />
        <div className="flex justify-center  mb-4 ">
          <Card className="flex w-full lg:w-[50%]    p-4 items-center flex-col  gap-[40px]">
            <LoginForm />
          </Card>
        </div>
      </Center>
   
  );
}
