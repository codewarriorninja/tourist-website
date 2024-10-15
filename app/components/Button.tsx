type ButtonProps = {
    type:'button' | 'submit'
    title:string
    variant?:string
    color?:string
}

const Button = ({type,title,variant, color}:ButtonProps) => {
  return (
    <button className={`flex justify-center px-3 py-2 rounded-full border font-Inter text-base text-white ${color} ${variant}`} type={type}>
     {title}
    </button>
  )
}

export default Button