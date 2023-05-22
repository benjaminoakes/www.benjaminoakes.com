---
layout: post
title: "nepalez/rspec-sqlimit: RSpec matcher to control SQL queries made by block of code"
category: ""
date: 2023-05-22
---

```ruby
RSpec.describe "N+1 safety" do
  it "doesn't send unnecessary requests to db" do
    expect { User.create }.not_to exceed_query_limit(1)
  end

  it "can restrict the matcher using regex" do
    expect { User.create }.not_to exceed_query_limit(1).with(/^INSERT/)
  end
end
```

Source: [nepalez/rspec-sqlimit: RSpec matcher to control SQL queries made by block of code](https://github.com/nepalez/rspec-sqlimit)
