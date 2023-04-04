import React from "react";

function PortfolioCard(props) {
  return (
    <div className="mx-auto max-w-2xl sm:py-6 lg:max-w-5xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-1 lg:grid-cols-2">
        {props.portfolioContent.map((item) => (
          <div className="max-w-xl rounded overflow-hidden border-2 border-white hover:border-[#49AB8C] bg-[#303634] hover:bg-[#434C49] md:max-w-lg" key={item.id}>
            <img className="w-full" src={item.image} alt=""></img>
            <div className="px-6 py-4 pb-2">
              <div className="font-bold text-xl mb-2">{item.title}</div>
              <p className="pb-2">{item.date}</p>
              <p className="pb-4">{item.description}</p>
              <div className="">
                <a href={item.githubUrl} target="_blank" rel="noreferrer" className="inline-block bg-[#49AB8C] hover:bg-[#2B6452] text-white text-sm font-semibold py-2 px-4 rounded mr-2 mb-2">
                  GitHub Repo
                </a>
                <a href={item.deployedUrl} target="_blank" rel="noreferrer" className="inline-block bg-[#49AB8C] hover:bg-[#2B6452] text-white text-sm font-semibold py-2 px-4 rounded mr-2 mb-2">
                  Deployed App
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioCard;
