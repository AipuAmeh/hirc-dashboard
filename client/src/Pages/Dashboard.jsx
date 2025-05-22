import { useState, useEffect } from "react";
const Dashboard = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const url = "http://127.0.0.1:5000/api/data";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response not okay: ${response.status}`);
      }
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>This is the dashboard</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.PI_NAME} – {item.SHORT_TITLE}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
