import { Input, Button } from 'antd'
import { useState } from 'react'
import Tweet from '../../components/tweet'

function FeedScreen() {
  const [newTweet, setnewTweet] = useState<string | undefined>()
  const [listOfTweets, setListOfTweets] = useState<string[]>([
    'firstItem',
    'secondItem',
    'thirdItem',
  ])

  const inputChange = (event: any) => {
    const newValue = event.target.value
    setnewTweet(newValue)
  }

  // let array = ['firstItem', 'secondItem', 'thirdItem']
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
          {' '}
          <Input placeholder='Basic usage' onChange={inputChange} />
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
