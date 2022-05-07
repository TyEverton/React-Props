type tweetProps = { tweetText: string }

function Tweet(props: tweetProps) {
  return <div>{props.tweetText}</div>
}

export default Tweet
