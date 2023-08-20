///////////////////////////// -----------------------global value ----------------------------------//////////////////////////////////
let total = 0;
let count = 1;

///////////////////////////// -----------------------global function----------------------------------//////////////////////////////////
function getElementByTextFiled(itemName)
{
   const filedName = document.getElementById(itemName);
   const name = filedName.innerText;
   return name;
}

 function itemPrice(itemPrice)
 {
   const findItemPrice = document.getElementById(itemPrice);
   const priceString = findItemPrice.innerText;
   const price = parseFloat(priceString);
   return price;
 } 

 function setIdAndValue(id, value)
 {
   const name = document.getElementById(id);
   name.innerText = value;
 }
  
//  function discountCheckpoint(total)
//  {
//    if(total > 200)
//    {
//       document.getElementById('Submit').removeAttribute('disabled');
//    }
//  }

 

 function mainFunction(ItemNameId, ItemPriceId)
 {
   const itemName = getElementByTextFiled(ItemNameId);
   const price = itemPrice(ItemPriceId);
   total += price;
   document.getElementById('btn-MakePaurchase').removeAttribute('disabled');
   
   setIdAndValue('total-Price', total.toFixed(2));
        
   const allDisplay = document.getElementById('allDisplay');
   const p = document.createElement('p');
   p.innerText = count + ".  " + itemName;
   count += 1;
    allDisplay.appendChild(p);
   // const inputText1 = document.getElementById('inputText').value;
   
      
   //const inputValueString = inputText1.value;
   /// discountCheckpoint(total);
   let currentTotal = total;
    
   if(total >= 200)
   {
      document.getElementById('Submit').removeAttribute('disabled');
         
      ////20% off operation

      document.getElementById('Submit').addEventListener('click', function()
      {
         
         
         if(document.getElementById('inputText').value === "SELL200")
         {
            
            let afterDiscount  = (total / 100) * 80;
            let discount = (total - afterDiscount);
            const discountName = document.getElementById('discount');
            discountName.innerText = discount.toFixed(2);
            const totalTka = document.getElementById('totalTka');
            totalTka.innerText = afterDiscount.toFixed(2);
            
         }
         
      })
      
        
   }
    
   

 }

 

  //////////////------------------------------key 1.1------------------------------------///////////////////////////////////////////////


      /////  ------------------         Kitchenware  key             ----------------------- /////////////////
function getAccessories()
{
   mainFunction('accessoriesName', 'accessoriesNamePrice')

}
function Accessories2()
{
   mainFunction('Accessories2Name', 'Accessories2-price');
}

function homeCooker()
{
   mainFunction('homeCookerName', 'homeCookerPrice');
}


//////////// --------------------------------          Sportswear key -------------------- /////////////////////

function SportsBackCap()
{
   mainFunction('SportsBackCapName', 'SportsBackCapPrice');
}

function fullJerseySet()
{
   mainFunction('fullJerseySetName', 'fullJerseySetPrice');
}

function sportsCates()
{
   mainFunction('sportsCatesName', 'sportsCatesPrice');
}

/////////////// -------------      Furniture  key ----------------------------------------////////////////////////////

function SingleRelaxChair()
{
   mainFunction('SingleRelaxChairName', 'SingleRelaxChairPrice');

}

function childrenPlay()
{
   mainFunction('childrenPlayName', 'childrenPrice');
}

function flexibleSofa()
{
   mainFunction('flexibleSofaName', 'flexibleSofaPrice');
}


















// // add to calculation entry
// function addToCalculationEntry(areaType, area)
// {
//      console.log(areaType + " " + area);
//      const calculationEntry = document.getElementById('calculation-entry');
//      const count = calculationEntry.childElementCount;
     
//      const p = document.createElement('p');
//      p.classList.add('my-4');
//      p.innerHTML = `${count  + 1} ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success" >Convert</button> `;
//      calculationEntry.appendChild(p);



// }