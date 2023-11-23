
export default function CustomInput({ label, invalid, ...props }) {
      console.log('invalid state', invalid)
      let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase";
      let inputClasses = "w-full px-3 py-2 leading-tight border rounded shadow";

      if (invalid) {
            labelClasses += " text-red-500";
            inputClasses += " text-red-400 border-red-500 bg-red-300";
      } else {
            labelClasses += " text-stone-200";
            inputClasses += " text-gray-700 border-gray-200 bg-stone-300";
      }

      return (
            <p>
                  <label
                        className={labelClasses}>{label}
                  </label>
                  <input
                        className={inputClasses}
                        {...props} />
            </p>
      );
}