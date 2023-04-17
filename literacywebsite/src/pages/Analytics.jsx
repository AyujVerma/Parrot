import React, { useState } from "react";
import Analytics_Reading from "./Analytics_Reading";
import Analytics_Writing from "./Analytics_Writing";

function Analytics() {
  const [page, setPage] = useState("Reading Analytics");

  const renderPage = () => {
    switch (page) {
      case "Reading Analytics":
        return <Analytics_Reading  />;
      case "Writing Analytics":
        return <Analytics_Writing />;
      default:
        return <Analytics_Reading />;
    }
  };

  return (
    <div>
      <div style={{}}>
        <button onClick={() => setPage("Writing Analytics")}>Writing</button>
      </div>
      {renderPage()}
    </div>
  );
}

export default Analytics;
