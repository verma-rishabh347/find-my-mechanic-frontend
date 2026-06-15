
function FrequentlyAsked() {
    const faqData = [{que:"How do I verify the mechanic's credentials?",ans:"Every mechanic on our platform undergoes a rigorous 5-point verification process, including background checks, certification validation (ASE certified), and workshop quality inspections."},{que:"Are the pricing estimates accurate?",ans:"Our AI-driven estimation tool uses real-time market data and local labor rates. While final prices may vary slightly based on actual parts needed, 95% of our users find the estimate within 10% of the final bill."},{que:"What if I need to cancel my booking?",ans:"Cancellations are free up to 24 hours before your scheduled appointment. Late cancellations may incur a small service fee to compensate the mechanic for their reserved time slot."},{que:"How do I know if the mechanic is trustworthy?",ans:"We rely on a robust review and rating system. You can read detailed reviews from previous customers, view the mechanic's overall rating, and see their response rate to ensure you choose a reliable professional."},{que:"What if I'm not satisfied with the service?",ans:"Customer satisfaction is our top priority. If you're not happy with the service, please contact our support team within 48 hours of your appointment. We will work with you and the mechanic to resolve any issues, which may include a refund or a free re-service."}]
  return (
    <div>
        <h1 className='text-blue-800 text-center text-4xl pt-20'>Frequently Asked Questions</h1>
        <p className='pt-1 mb-10 text-center'>Find quick answers to common inquiries about our service.</p>
        {faqData.map((data)=>(<div key={data.que} className='w-[50%] mb-5 p-5 m-auto border rounded-xl '><h3 className='font-bold '>{data.que}</h3  ><p className='italic text-slate-700' >{data.ans}</p></div>))}
    </div>
  )
}

export default FrequentlyAsked
