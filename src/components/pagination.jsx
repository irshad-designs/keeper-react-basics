import { useEffect, useState } from "react";
import axios from "axios";
const Contents = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/").then((res) => {
      setData(res.data);
    });
  }, []);

  const handlePageNumber = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage !== page &&
      selectedPage <= data.length / 5
    )
      setPage(selectedPage);
  };

  return (
    <div>
      <div className="contents__box">
        {data.slice(page * 5 - 5, page * 5).map((itm, i) => {
          return (
            <div className="contents__box_container">
              <img src={itm.image} alt="img" />
              <span>{itm.title}</span>
            </div>
          );
        })}
      </div>
      <div>
        {data.length >= 0 && (
          <div>
            <button onClick={() => handlePageNumber(page - 1)}>prev</button>
            {[...Array(data.length / 5)].map((_, i) => {
              return (
                <button key={i} onClick={() => handlePageNumber(i + 1)}>
                  {i + 1}
                </button>
              );
            })}
            <button onClick={() => handlePageNumber(page + 1)}>next</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contents;
