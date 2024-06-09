const Card = ({ image, candidateName, numberOfVotes }: { image: string, candidateName: string, numberOfVotes: number }) => {
    return (
      <div className="p-4 bg-slate-100 border-1 shadow-slate-50 flex flex-row items-center justify-center w-[400px]">
        <div className="max-w-48">
          <img src={image} alt={candidateName} />
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-blue-100 font-bold text-xl">{candidateName}</h2>
          <p className="text-gray-300">Votes: {numberOfVotes}</p>
        </div>
  
      </div>
    )
  }

  export default Card;