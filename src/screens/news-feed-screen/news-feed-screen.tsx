import { Input, Button } from 'antd'
import { useState } from 'react'
import Tweet from '../../components/tweet'

// First step is to build out the components on each page
// 1) Included within the component on this particular screen are the textfield and the save button
// 2) add an onClick or onSubmit on the save button and test it with console.log
// 3) add an inputChange on the textfield component, and console.log the inputs
// 4)create useState for the newTweets that the user inputs (this sets the newTweet value to the updated users value)
// 5)create useState for listOfTweets that will store the list of the tweets users have input and saved (listOfTweets will be updated with the users newTweet because the onClick will call newTweet, after spreading/copying the listOfTweets)
// 6)use props to pass the tweetTexts to the tweet component (set type as an empty a string and an empty array)
// 7)

function FeedScreen() {
  const [newTweet, setNewTweet] = useState<string | undefined>()
  const [listOfTweets, setListOfTweets] = useState<string[]>([
  ])

  const inputChange = (event: any) => {
    const newValue = event.target.value
    setNewTweet(newValue)
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
