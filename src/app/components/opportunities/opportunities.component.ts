import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {PeriodicElement} from '../../models/opportunity.model';
@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class OpportunitiesComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['id', 'skills', 'date', 'location'];
  expandedElement?: PeriodicElement | null;
  constructor() { }

  ngOnInit(): void {
  }

}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    skills: 'Hydrogen',
    date: "1.0079",
    location: 'H',
    ed: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  }, {
    id: 2,
    skills: 'Helium',
    date: "4.0026",
    location: 'He',
    ed: `Helium is a chemical element with location He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`
  }, {
    id: 3,
    skills: 'Lithium',
    date: "6.941",
    location: 'Li',
    ed: `Lithium is a chemical element with location Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`
  }, {
    id: 4,
    skills: 'Beryllium',
    date: "9.0122",
    location: 'Be',
    ed: `Beryllium is a chemical element with location Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`
  }, {
    id: 5,
    skills: 'Boron',
    date: "10.811",
    location: 'B',
    ed: `Boron is a chemical element with location B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`
  }, {
    id: 6,
    skills: 'Carbon',
    date: "12.0107",
    location: 'C',
    ed: `Carbon is a chemical element with location C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`
  }, {
    id: 7,
    skills: 'Nitrogen',
    date: "14.0067",
    location: 'N',
    ed: `Nitrogen is a chemical element with location N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`
  }, {
    id: 8,
    skills: 'Oxygen',
    date: "15.9994",
    location: 'O',
    ed: `Oxygen is a chemical element with location O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`
  }, {
    id: 9,
    skills: 'Fluorine',
    date: "18.9984",
    location: 'F',
    ed: `Fluorine is a chemical element with location F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`
  }, {
    id: 10,
    skills: 'Neon',
    date: "20.1797",
    location: 'Ne',
    ed: `Neon is a chemical element with location Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`
  },
];
