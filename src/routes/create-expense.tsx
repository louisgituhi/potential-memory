import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const expenseSchema = z.object({
    trxAmount: z.coerce.number().min(1, { message: "Number must be atleast 1"}),
    trxCost: z.coerce.number().min(1, { message: "Number must be atleast 1"})
});

export  default function CreateExpense () {

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm({
        resolver: zodResolver(expenseSchema)
    })

    const onSubmit = (data: any) => {
        console.log("Form Data:", data);
      };

    return (
        <div className="flex items-center justify-center h-screen">

            <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

                    <div>
                        <label htmlFor="Transaction amount" className="block text-sm font-medium">Transaction Amount</label>
                        <input
                        type="number"
                        {...register("trxAmount", { valueAsNumber: true })}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                        {errors.trxAmount && <p className="text-red-500 text-sm">{errors.trxAmount.message}</p>}
                    </div>
        
                    <div>
                        <label htmlFor="Transaction cost" className="block text-sm font-medium">Transaction cost </label>
                        <input
                        type="number"
                        {...register("trxCost", { valueAsNumber: true })}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                        {errors.trxCost && <p className="text-red-500 text-sm">{errors.trxCost.message}</p>}
                    </div>
        
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                    >
                        Submit
                    </button>

                </form>
            </div>
        </div>
    )
}