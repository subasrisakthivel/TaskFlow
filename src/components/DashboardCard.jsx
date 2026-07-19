function DashboardCard({title,count}){
    return(
       <div className="bg-white shadow-lg rounded-2xl p-6 w-full text-center">
            <h4 className="font-bold">{title}</h4>
            <p className="text-2xl">{count}</p>
        </div>
    );
}
export default DashboardCard;