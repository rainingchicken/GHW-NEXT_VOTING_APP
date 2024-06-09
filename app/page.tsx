"use client"
import { useState } from 'react'
import Card from './components/Card'

export default function Home() {
  //dogeVotes -> state, setDogeVotes -> function
  const [dogeVotes, setDogeVotes] = useState<number>(0)

  const handleVote = () => {
    setDogeVotes(dogeVotes + 1)
  }

  //const [isOpen, setIsOpen] = useState<boolean>(false)
  //const [selectCandidate, setSelectedCandidate] = useState<string>("")
  //const numberOfVotes = 0;

  const candidates = ["Doge", "Oh Long Johnson", "Grumpy Cat"];
  const candidatesInfo = [
    {
      image: "/doge.jpg",
      candidateName: "Doge",
      numberOfVotes: 0
    },
    {
      image: "/johnson.jpg",
      candidateName: "Oh Long Johnson",
      numberOfVotes: 0
    },
    {
      image: "/grumpcat.jpg",
      candidateName: "Grumpy Cat",
      numberOfVotes: 0
    }
  ]
  return (
    <div>
      <h1>DOGE DON'T WORRY WE'RE GONNA BEAT OH LONG JOHNSON!</h1>
      <h1>Number of votes for Doge: {dogeVotes}</h1>
      <h2>Candidates:</h2>
      <ul>
        {candidates.map((candidate) => <li>{candidate}</li>)}
      </ul>
      {
        candidatesInfo.map((candidateInfo, index) => <Card {...candidateInfo} key={index} />)
      }
      <button className="p-4 bg-blue-500 text-white rounded-md mt-4 hover:bg-blue-600" onClick={handleVote}>Vote Doge</button>
    </div>
  );
}


