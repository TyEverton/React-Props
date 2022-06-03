// When using TSX, we must declare the data type of the props. For this example, tweetText (our prop from the parent component "news-feed-screen") is going to be a string
type tweetProps = { tweetText: string }
// tweetProps is then declared and set to the value of tweetText (which again, data type is a string)
function Tweet(props: tweetProps) {
  // inside of the component we want to use the props, we must set its initial argument to the prop it will be receiving
  return <div>{props.tweetText}</div>
//   finally, we can render the prop by first calling the props function, then specifying which prop we are going to render
}

export default Tweet
