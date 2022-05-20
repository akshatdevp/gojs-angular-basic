import { Component, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent } from 'gojs-angular';
import * as go from 'gojs';
@Component({
  selector: 'app-ivr-tree',
  templateUrl: './ivr-tree.component.html',
  styleUrls: ['./ivr-tree.component.css']
})
export class IVRTREEComponent implements OnInit {
  @ViewChild('myDiagramDiv', {static : true}) public myDiagramComponent : DiagramComponent
    // Diagram state props
  // Big object that holds app-level state data
// As of gojs-angular 2.0, immutability is required of state for change detection
public diagramDivClassName: string = 'myDiagramDiv';

public state = { // contains the variable properties
  // Diagram state props
  diagramNodeData: [ // nodes
    { id: 'Alpha', text: "root", color: 'lightblue' },
    { id: 'Beta', text: "Beta", color: 'orange' },
    { id : 'Zetaa', isGroup : true},
    { id : "Gammaa", group : "Zetaa", text : 'Gammaa', color : 'white'},
    { id : "Deltaa", group : 'Zetaa', text : 'Deltaa', color : 'yellow'},
    { id : 'Zeta', isGroup : true},
    { id : "Gamma", group : "Zeta", text : 'Gamma', color : 'red'},
    { id : "Delta", group : 'Zeta', text : 'Delta', color : 'green'},
    { id : 'Zetaaa', isGroup : true},
    { id : "Gammaaa", group : "Zetaaa", text : 'Gammaaa', color : 'white'},
    { id : "Deltaaa", group : 'Zetaaa', text : 'Deltaaa', color : 'yellow'},


  ],
  diagramLinkData: [ // link between nodes(arrows) key is auto generated if not given
    { from: 'Alpha', to: 'Beta' },
    { from: 'Alpha', to: 'Zeta' },
    { from : 'Alpha', to: 'Zetaa'},
    { from : 'Zeta' , to : 'Zetaaa'}
  ],
  diagramModelData: { prop: 'value' },
  skipsDiagramUpdate: false,

}; // end state object

// public diagramDivClassName: string = 'myDiagramDiv';

// initialize diagram / templates
public initDiagram(): go.Diagram {
  const $ = go.GraphObject.make;
  const dia = $(go.Diagram, {
    'undoManager.isEnabled': true,
    layout: $(go.TreeLayout,{
      angle : 90 // makes tree vertical
    }), //
    model: new go.GraphLinksModel(
      {
        nodeKeyProperty: 'id',
        linkKeyProperty: 'key'
      }
    )
  });

  // define the Node template
  dia.nodeTemplate =
    $(go.Node, 'Auto',
        $(go.Shape, 'RoundedRectangle', { stroke: null },
          new go.Binding('fill', 'color')
        ),
        $("Button",  // button A
        {
          name: "ButtonA",
          click: (e,port) => {var x= port.part;}
        },
        new go.Binding("portId", "a")
      ),
        $(go.TextBlock, { margin: 8, editable: true },
          new go.Binding('text').makeTwoWay())
      );
  return dia;
}
/**
 * Handle GoJS model changes, which output an object of data changes via Mode.toIncrementalData.
 * This method should iterate over thoe changes and update state to keep in sync with the FoJS model.
 * This can be done with any preferred state management method, as long as immutability is preserved.
 */
public diagramModelChange = function(changes: go.IncrementalData) {
  console.log(changes);
  // see gojs-angular-basic for an example model changed handler that preserves immutability
  // when setting state, be sure to set skipsDiagramUpdate: true since GoJS already has this update
};

// public initPalette(): go.Palette {
//   const $ = go.GraphObject.make;
//   const palette = $(go.Palette);

//   // define the Node template
//   palette.nodeTemplate =
//     $(go.Node, 'Auto',
//       $(go.Shape, 'RoundedRectangle', { stroke: null },
//         new go.Binding('fill', 'color')
//       ),
//       $(go.TextBlock, { margin: 8 },
//         new go.Binding('text', 'key'))
//     );

//   palette.model = new go.GraphLinksModel(
//     {
//       linkKeyProperty: 'key'  // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
//     });

//   return palette;
// }
  constructor() { }

  ngOnInit(): void {
  }

}
