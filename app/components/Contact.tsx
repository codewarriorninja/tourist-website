import Button from "./Button"
const Contact = () => {
  return (
    <section className="mt-16 bg-[#F3F3F3] bg-bg-primary bg-center bg-cover h-72">
      <div className="flex justify-center items-center flex-col py-10">
        <h1 className="font-playFair text-5xl font-bold text-white max-w-sm text-center pb-8">Ready to go? Give us a quick call</h1>
        <Button type="button" title="Contact us" variant="btn_dim_yellow"/>
      </div>
    </section>
  )
}

export default Contact