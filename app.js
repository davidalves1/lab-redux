/**
 * Links úteis:
 * https://medium.com/@renatoalencar/redux-sem-react-entendendo-os-conceitos-do-redux-de-maneira-mais-simples-poss%C3%ADvel-2ef962975f45
 * https://medium.com/nossa-coletividad/passo-a-passo-com-redux-um-fluxo-de-trabalho-simples-e-robusto-para-aplica%C3%A7%C3%B5es-da-vida-real-9b8f8236a1cb
 * https://www.youtube.com/watch?v=ZKCYqJu4n3s&list=PL55RiY5tL51rrC3sh8qLiYHqUV3twEYU_&index=3
 */

const { createStore } = Redux;

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD':
			state = state + action.payload;
    	break;
		case 'SUB':
			state = state - action.payload;
    	break;
  }
  return state;
}

// A funcção createStore passa dois parâmetros: o reducer e o estado inicial
const store = createStore(reducer, 0);

document.querySelector('#add').addEventListener('click', () => {
	return store.dispatch({
		type: 'ADD',
		payload: 1 // Pode ser qualquer nome, mas normalmente se usa payload
	})
});

document.querySelector('#sub').addEventListener('click', () => {
	return store.dispatch({
		type: 'SUB',
		payload: 1
	})
});

// Reflete as alterações realizadas pelo reducer
store.subscribe(() => {
	document.querySelector('#cont').innerHTML = store.getState();
});

