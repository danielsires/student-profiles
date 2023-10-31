import { useState } from 'react';
import Tags from './Tags';
function Card({
  company,
  email,
  firstName,
  lastName,
  pic,
  skill,
  avg,
  tests,
  // cardTags,
}) {
  const [showTests, setShowTests] = useState(false);
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState('');

  const toggleTests = () => {
    showTests ? setShowTests(false) : setShowTests(true);
  };
  const addItem = (item) => {
    console.log(tags);
    tags.push(item);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(tag, tags);
    addItem(tag);
    setTags([...tags]);
    setTag('');
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    setTag(event.target.value);
  };

  return (
    <div className="card-container">
      <div>
        <img className="profile-img" src={pic} alt={lastName} />
      </div>
      <div className="student-info">
        <h1 className="full-name">{`${firstName} ${lastName}`}</h1>
        <button onClick={toggleTests}>
          <i className="fa-solid fa-plus"></i>
        </button>
        <p>Email: {email}</p>
        <p>Company: {company}</p>
        <p>Skill: {skill}</p>
        <p>Average: {avg}%</p>
        <ul id="tests">
          {showTests
            ? tests.map((test, idx) => {
                return (
                  <li key={idx}>
                    Test {idx + 1}: {test}
                  </li>
                );
              })
            : null}
        </ul>
        <div id="tags">
          {tags ? <Tags tags={tags} /> : null}
          {/* {tags
            ? tags.map((t, idx) => {
                return (
                  <button className='tag' key={idx}>
                    {t}
                  </button>
                )
              })
            : null} */}
        </div>

        <form onSubmit={handleSubmit}>
          <input
            value={tag}
            type="text"
            name="tag"
            id="new-tag"
            placeholder="new tag"
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  );
}

export default Card;
