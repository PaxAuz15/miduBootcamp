import Title from "./Title"
import DataRepresent from "./DataRepresent"

const Statistics = ({ counter, all, average, positive }) => {
  return (
    <>
      <Title text="statistics" />
      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <DataRepresent option="good" counterValue={counter.good} />
          <DataRepresent option="neutral" counterValue={counter.neutral} />
          <DataRepresent option="bad" counterValue={counter.bad} />
          <DataRepresent option="all" counterValue={all} />
          {all === 0 ? (
            <>
              <DataRepresent option="average" counterValue={0} />
              <DataRepresent option="positive" counterValue="0%" />
            </>
          ) : (
            <>
              <DataRepresent option="average" counterValue={average} />
              <DataRepresent option="positive" counterValue={positive} />
            </>
          )}
        </>
      )}
    </>
  )
}

export default Statistics
