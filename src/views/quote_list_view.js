import Backbone from 'backbone';
import _ from 'underscore';

import Quote from '../models/quote';
import QuoteView from '../views/quote_view';

const QuoteListView = Backbone.View.extend ({
  initialize(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
  },

  render() {
    this.$('#quotes').empty();
    this.model.each((quote) => {
      const quoteView = new QuoteView ({
        model: quote,
        template: this.template,
        tagName: 'li',
        className: 'quote',
      });

      this.$('#quotes').append(quoteView.render().$el);
      // Add symbol dropdown list using js
      let getSymbol = document.getElementById("symbol");
      let option = document.createElement("option");
      option.text = quote.get('symbol');
      getSymbol.add(option);
    });
    return this;
  }

});

export default QuoteListView;
