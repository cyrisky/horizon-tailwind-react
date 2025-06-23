import InputField from "components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "components/checkbox";

export default function SignIn() {
  return (
    <div className="mb-24 mt-24 flex h-full w-full items-center justify-center px-4 md:mx-0 md:px-0 lg:mb-16 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className="mt-[15vh] w-full max-w-full flex-col items-center md:pl-6 lg:pl-0 xl:max-w-[520px]">
        <h4 className="mb-4 text-center text-5xl font-bold text-navy-700 dark:text-white">
          Sign In
        </h4>
        <p className="mb-12 ml-1 text-lg text-gray-600">
        </p>
        <div className="mb-10 flex h-[60px] w-full items-center justify-center gap-4 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
          <div className="rounded-full text-3xl">
            <FcGoogle />
          </div>
          <h5 className="text-xl font-medium text-navy-700 dark:text-white">
            Sign In with Google
          </h5>
        </div>
      </div>
    </div>
  );
}
