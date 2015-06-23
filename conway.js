
function Cell(x,y, grid){
	this.x=x;
	this.y=y;
	this.gridRef = grid;
	this.alive = false;
	this.nextState = false;
	this.calcState = function(){
		var totalCount = 0;
		for(var i = this.x-1; i < this.x + 2; i++)
			for(var j = this.y-1; j < this.y + 2; j++)
				if(i==this.x&&j==this.y)
					continue;
				else if(this.gridRef[i][j].alive)
					totalCount++;
		if(totalCount < 3)
			this.nextState = false;
		else if(totalCount == 4)
			this.nextState = true;
		else if(totalCount > 4)
			this.nextState - false;
	};
	this.updateState = function(){
		this.alive = this.nextState;
	}
	this.setState = function(val){
		this.alive = val;
		this.nextState = val;
	}
	this.toString = function(){
		return this.alive;
	}
	this.draw = function(size, panel){
		
	}
}
function Grid(x,y){
	this.grid = [];
	for(var i = 0; i < x; i++){
		grid[i] = [];
		for(var j = 0; j < y; j++)
			grid[i][j] = new Cell(i,j,grid);
	}
	this.update = function(){
		this.grid.foreach(function(val){val.foreach(function(val){val.calcState();})});
		this.grid.foreach(function(val){val.foreach(function(val){val.updateState();})});
	}
	this.draw = function(){

	}
}