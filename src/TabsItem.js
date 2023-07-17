function TabsItem ({tab, index, setActivTab}){


    return(<div className="contTabs">
             <button className="btnEachTabs" value={index} onClick={()=>setActivTab(index)}>{tab}</button>
      </div>
          )
      }
      export default TabsItem;