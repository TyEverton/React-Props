import { Input, Button } from 'antd'
import { useState } from 'react'
import Tweet from '../../components/tweet'


// Props are a way to pass data from one component (parent) to another component (child)

// In this example - news-feed-screen is the parent component, while tweet is the child component
function FeedScreen() {
  const [newTweet, setNewTweet] = useState<string | undefined>()
  const [listOfTweets, setListOfTweets] = useState<string[]>([
  ])

  const inputChange = (event: any) => {
    const newValue = event.target.value
    setNewTweet(newValue)
  }
  
  const submitClick = () => {
    if (newTweet) setListOfTweets([...listOfTweets, newTweet])
  }

  return (
    <div
      style={{
        width: 800,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 40,
      }}
    >
      <div>
        <div style={{ display: 'flex' }}>
          <Input placeholder='Share your thoughts!' onChange={inputChange} />
          <Button type='primary' onClick={submitClick}>
            Save
          </Button>
        </div>
      </div>
      <div>
        {listOfTweets.map((tweetValue, tweetIndex) => {
          return <Tweet key={tweetIndex} tweetText={tweetValue} />
        })}
      </div>
    </div>
  )
}

export default FeedScreen
