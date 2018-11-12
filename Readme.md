
## SuperTable 

... _The missing table generator_. 

I know there are a lot of html table generators in NPM, but I wanted to learn test driven development and webpack from ground up, and Here's what I learnt in the process. 

This library has been developed with a test-first approach, then I've written every single webpack configuration. 

## How to use it 

First create a div with an id: 

```html 
<div id="test-table"></div>
```

Then pass the array you want to render as HTML table to the function `SuperTable.objectToHtmlTable()` and see the magic happening.

```javascript 
const testData = [
  {
    mountain: 'Everest',
    height: 8848,
    chain: 'Himalaya'
  },
  {
    mountain: 'Fuji',
    height: 3776,
    country: 'Japan',
    type: 'volcano'
  },
  {
    mountain: 'Kilimanjaro',
    height: 5895,
    country: 'Tanzania',
    type: 'volcano'
  }
];

const htmlTable = SuperTable.objectToHtmlTable(testData);
document.getElementById('test-table').appendChild(htmlTable);

```

Here's the table:

<div id="test-table"></div>
<script src="dist/super-table.js"></script>
<script>
	const testData = [
		{
		mountain: 'Everest',
		height: 8848,
		chain: 'Himalaya'
    },
    {
      mountain: 'Fuji',
      height: 3776,
      country: 'Japan',
      type: 'volcano'
    },
    {
      mountain: 'Kilimanjaro',
      height: 5895,
      country: 'Tanzania',
      type: 'volcano'
    }
	];

	const htmlTable = SuperTable.objectToHtmlTable(testData);

	document.getElementById('test-table').appendChild(htmlTable);
</script>

## To do 

The next stuff I want to do in this library is: 

- accept everything, not only an array of object. If in the array you pass a string, render the string. If you pass another array, render an inner table inside. etc etc. 
- From table to json: this will be more difficult and will require more time, but eventually I'll do it. 


