'use client'
import { useForm } from "react-hook-form";

export const Thing = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: Record<string, any>) => {
    try {
      console.log(data)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="background-black" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("username", { required: "Username is required" })}
      />
      {errors.username && <p>{errors.username.message}</p>}

      <input
        {...register("password", { required: "Password is required" })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">
        "Submit"
      </button>
    </form>
  );
};
