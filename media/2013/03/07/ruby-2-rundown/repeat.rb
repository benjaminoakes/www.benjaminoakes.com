module Enumerable
  # a generic method to repeat the values of any enumerable
  def repeat(n)
    raise ArgumentError, "#{n} is negative!" if n < 0
    unless block_given?
      return to_enum(__method__, n) do # __method__ is :repeat here
        sz = size     # Call size and multiply by n...
        sz * n if sz  # but return nil if size itself is nil
      end
    end
    each do |*val|
      n.times { yield *val }
    end
  end
end
