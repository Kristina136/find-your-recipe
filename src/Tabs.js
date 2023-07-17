import TabsItem from "./TabsItem";

function Tabs ({setActivTab}){


    return(<div>
             {
                ["List of ingrediens", "Callories", "Total time"].map((tab, index)=><TabsItem
                key={index}
                tab={tab}
                index={index}
                setActivTab={setActivTab}
                />)
             }
      </div>
          )
      }
      export default Tabs;